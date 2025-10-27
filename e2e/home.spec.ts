import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load the page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Aryan Kumbhare/)
  })

  test('should display hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Aryan Kumbhare/i })).toBeVisible()
    await expect(page.getByText(/Data scientist & full-stack engineer/i)).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    const nav = page.getByRole('navigation')
    await expect(nav).toBeVisible()
    
    // Check navigation links
    await expect(nav.getByRole('link', { name: /About/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /Skills/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /Projects/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /Contact/i })).toBeVisible()
  })

  test('should navigate to projects section', async ({ page }) => {
    await page.getByRole('button', { name: /View Projects/i }).click()
    await expect(page.locator('#projects')).toBeInViewport()
  })

  test('should display project cards', async ({ page }) => {
    await page.locator('#projects').scrollIntoViewIfNeeded()
    const projectCards = page.getByRole('article')
    await expect(projectCards.first()).toBeVisible()
  })

  test('should open project modal', async ({ page }) => {
    await page.locator('#projects').scrollIntoViewIfNeeded()
    await page.getByRole('button', { name: /View Details/i }).first().click()
    
    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible()
    
    // Close modal
    await page.getByRole('button', { name: /Close modal/i }).click()
    await expect(modal).not.toBeVisible()
  })

  test('should display skills section', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: /Skills & Expertise/i })).toBeVisible()
  })

  test('should have accessible contact form', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded()
    
    const form = page.getByRole('form')
    await expect(form).toBeVisible()
    
    // Check form fields
    await expect(page.getByLabel(/Name/i)).toBeVisible()
    await expect(page.getByLabel(/Email/i)).toBeVisible()
    await expect(page.getByLabel(/Message/i)).toBeVisible()
  })

  test('should validate contact form', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded()
    
    // Try to submit empty form
    await page.getByRole('button', { name: /Send Message/i }).click()
    
    // Should show validation errors
    await expect(page.getByText(/must be at least/i).first()).toBeVisible()
  })

  test('should be keyboard navigable', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Check if focus is visible
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('should have proper meta tags', async ({ page }) => {
    const title = await page.title()
    expect(title).toContain('Aryan Kumbhare')
    
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description).toBeTruthy()
  })

  test('should load without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    
    await page.waitForLoadState('networkidle')
    expect(errors).toHaveLength(0)
  })
})

test.describe('Accessibility', () => {
  test('should have skip to main content link', async ({ page }) => {
    await page.goto('/')
    
    // Focus the skip link
    await page.keyboard.press('Tab')
    const skipLink = page.getByText(/Skip to main content/i)
    await expect(skipLink).toBeFocused()
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')
    
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toBeVisible()
  })

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/')
    
    const images = page.locator('img')
    const count = await images.count()
    
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })
})

test.describe('Responsive Design', () => {
  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    await expect(page.getByRole('heading', { name: /Aryan Kumbhare/i })).toBeVisible()
  })

  test('should have working mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Open mobile menu
    await page.getByRole('button', { name: /Toggle menu/i }).click()
    
    // Check if menu items are visible
    await expect(page.getByRole('link', { name: /About/i })).toBeVisible()
  })
})
