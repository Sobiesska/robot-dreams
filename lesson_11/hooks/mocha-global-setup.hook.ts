/**
 * Global setup runs once before all test suites
 * Use this for one-time setup operations like:
 * - Starting test databases
 * - Initializing test servers
 * - Setting global environment variables
 * - Creating necessary test directories
 */
export default function mochaGlobalSetup(): void {
    console.log('Dog tests global setup');
}
