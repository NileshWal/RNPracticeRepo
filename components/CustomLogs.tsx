/**
 * A utility class for logging messages with different severity levels.
 * Logs are only printed in debug mode to avoid cluttering production logs.
 */
class CustomLogs {
  private static isDebug = __DEV__; // same as BuildConfig.DEBUG

  /** Logs a debug message. */
  static debug(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.log(`[DEBUG] [${tag}]`, message ?? '');
  }

  /** Logs an info message. */
  static info(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.info(`[INFO] [${tag}]`, message ?? '');
  }

  /** Logs a warning message. */
  static warn(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.warn(`[WARN] [${tag}]`, message ?? '');
  }

  /** Logs an error message. */
  static error(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.error(`[ERROR] [${tag}]`, message ?? '');
  }

  /** Logs an object in a formatted manner. */
  static logObject(tag: string, obj: Record<string, any>) {
    if (!this.isDebug) return;
    console.log(`[OBJECT] [${tag}]`, JSON.stringify(obj, null, 2));
  }
}

export default CustomLogs;
