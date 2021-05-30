/// <reference types='codeceptjs' />
type ArchivedPage = typeof import('./PageObjects/ArchivedPage.js');
type Rest = import('./helpers/RestHelper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, ArchivedPage: ArchivedPage }
  interface Methods extends Playwright, Rest {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
