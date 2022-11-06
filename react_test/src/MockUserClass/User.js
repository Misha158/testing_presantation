export class User {
  static getPermissions() {
    return {
      readPage: false,
      updatePage: false,
      createPage: false,
    };
  }
}
