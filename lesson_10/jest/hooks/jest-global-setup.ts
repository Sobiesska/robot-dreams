/**
 * Global setup runs once before all test suites
 * Use this for one-time setup operations like:
 * - Starting test databases
 * - Initializing test servers
 * - Setting global environment variables
 * - Creating necessary test directories
 */
export default function globalSetup(
    globalConfig: { rootDir?: string },
    projectConfig?: { testEnvironment?: string }
): void {
    console.log('🚀 Running Jest global setup...');
    console.log(`Root directory: ${globalConfig.rootDir}`);
    console.log(`Test environment: ${projectConfig?.testEnvironment || 'default'}`);
    console.log('✅ Global setup completed');
}
