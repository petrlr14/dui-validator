import { describe, expect } from 'vitest'
import duiValidator from './duiValidator'

describe("duiValidator", () => { 
  it('should return false if dui lenght !== 9', () => { 
    expect(duiValidator("00000000")).toBe(false);
  })
  it("should return false on characters in dui", () => { 
    expect(duiValidator("hola56789")).toBe(false);
  })
  it('should return false on invalid dui', () => { 
    expect(duiValidator("123456789")).toBe(false);
  })
  it("should return true on valid dui", () => { 
    expect(duiValidator("023827235")).toBe(true);
  })

  //my tests
  it("should not be empty", () => {
    expect(duiValidator(" ")).toBe(false);
  })
})