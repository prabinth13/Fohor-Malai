import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 /* Lightbox - Magnific Popup */
 $('.popup-with-move-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
  });
  

  /* Filter - Isotope */
  var $grid = $('.grid').isotope({
      // options
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
  });
  
  // filter items on button click
  $('.filters-button-group').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
  }

}
