declare module NodeJS {
    interface Require {
      context(
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
      ): any;
    }
  }
  
  declare const require: NodeJS.Require;
  