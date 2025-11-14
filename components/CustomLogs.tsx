import React from 'react';

class CustomLogs {
  private static isDebug = __DEV__; // same as BuildConfig.DEBUG

  static debug(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.log(`[DEBUG] [${tag}]`, message ?? '');
  }

  static info(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.info(`[INFO] [${tag}]`, message ?? '');
  }

  static warn(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.warn(`[WARN] [${tag}]`, message ?? '');
  }

  static error(tag: string, message?: any) {
    if (!this.isDebug) return;
    console.error(`[ERROR] [${tag}]`, message ?? '');
  }

  static logObject(tag: string, obj: Record<string, any>) {
    if (!this.isDebug) return;
    console.log(`[OBJECT] [${tag}]`, JSON.stringify(obj, null, 2));
  }
}

export default CustomLogs;
