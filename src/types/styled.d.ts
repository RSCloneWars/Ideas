// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor: string;
    body: string;
    backgroundColor: string;
    buttonHover: string;
    fontDarkColor: string;
    mainImg: string;
    cardBgr: string;
    modalText: string;
  }
}
