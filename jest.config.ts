import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/components/(.*)$': '<rootDir>/components/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

export default createJestConfig(config)