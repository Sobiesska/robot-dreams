/**
 * Global teardown runs once after all test suites
 * Use this for one-time teardown operations like:
 * - Stopping test databases
 * - Stopping test servers
 * - Cleaning up test directories
 * - Closing test files
 */
export default function globalTeardown(
    globalConfig: { rootDir?: string },
    projectConfig?: { testEnvironment?: string }
): void {
    console.log('🧹 Running Jest global teardown...');
    console.log(`Root directory: ${globalConfig.rootDir}`);
    console.log(`Test environment: ${projectConfig?.testEnvironment || 'default'}`);
    console.log('✅ Global teardown completed');
}


