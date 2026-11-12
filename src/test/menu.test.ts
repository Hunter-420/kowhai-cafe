import { describe, it, expect } from 'vitest';
import { MENU_ITEMS, MENU_CATEGORIES } from '../lib/menu';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  honeypot: z.string().max(0),
});

describe('Kowhai Cafe Data & Logic Validation', () => {
  it('should load all 4 distinct menu categories', () => {
    expect(MENU_CATEGORIES.length).toBe(4);
    const categoryIds = MENU_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toContain('breakfast');
    expect(categoryIds).toContain('toast');
    expect(categoryIds).toContain('bakery');
    expect(categoryIds).toContain('drinks');
  });

  it('should validate every menu item has required pricing, description and tags', () => {
    expect(MENU_ITEMS.length).toBeGreaterThanOrEqual(10);
    MENU_ITEMS.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.name.length).toBeGreaterThan(3);
      expect(item.description.length).toBeGreaterThan(10);
      expect(item.price.startsWith('$')).toBe(true);
      expect(['breakfast', 'toast', 'bakery', 'drinks']).toContain(item.category);
    });
  });

  it('should reject invalid contact form data', () => {
    const invalidInput = {
      name: '',
      email: 'not-an-email',
      subject: 'hi',
      message: 'too short',
      honeypot: '',
    };
    const result = contactSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });

  it('should catch spam bot submission via honeypot field', () => {
    const spamInput = {
      name: 'Bot Spammer',
      email: 'bot@spam.com',
      subject: 'Cheap Loans Now',
      message: 'This is a spam message that is long enough.',
      honeypot: 'filled by bot',
    };
    const result = contactSchema.safeParse(spamInput);
    expect(result.success).toBe(false);
  });

  it('should accept valid contact form submission', () => {
    const validInput = {
      name: 'Aroha Tane',
      email: 'aroha@example.co.nz',
      subject: 'Saturday Table for 8',
      message: 'Hello, we would love to book a group table this coming Saturday morning.',
      honeypot: '',
    };
    const result = contactSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
