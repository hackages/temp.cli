import navigation from './navigationComponent';
import userCard from './userCard/userCardDirective';
import navMain from './navigationMain/navMainDirective';
import affiliate from './affiliate/affiliateDirective';

export default angular.module('navigation', [navigation, userCard, navMain, affiliate]).name;