/**
 * Global teardown runs once after all test suites
 * Use this for one-time teardown operations like:
 * - Stopping test databases
 * - Stopping test servers
 * - Cleaning up test directories
 * - Closing test files
 */
export default function mochaGlobalTeardown(): void {
    console.log('Dog tests global teardown');
}
