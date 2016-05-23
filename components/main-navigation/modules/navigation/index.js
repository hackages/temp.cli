import navigation from './navigationDirective';
import userCard from './user-card/usercardComponent';
import navMain from './main/mainComponent';
import affiliate from './affiliate/affiliateComponent';

export default angular.module('navigation', [navigation,userCard,navMain,affiliate]).name;