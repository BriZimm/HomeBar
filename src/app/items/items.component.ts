import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  menuItems = [];

  constructor() { }

  ngOnInit() {
    // Create (or get form the db in the future) some Menu Items here
    let item = {
      name: 'Santa\'s Joy',
      glass: 'Cocktail',
      served: 'With ice',
      garnish: 'Candy Cane',
      description: 'A jolly cocktail which would make Santa proud.',
      type: 'Sweet and tasty',
      similarTastes: 'Cherry 7-up and Vanilla',
      image: 'santasJoy.jpg'
    };
    this.menuItems.push(item);

    item = {
      name: 'Whiskey Sour',
      glass: 'Rocks',
      served: 'On ice, the foamier the better',
      garnish: 'lemon slice and cherry',
      description: 'Whiskey with sour taste and some soda mixed in.',
      type: 'Typical Sour, exchange whiskey with whatever you like',
      similarTastes: 'Whiskey, 7-up, Lemon, Sour',
      image: 'Whiskey-Sour.jpg'
    };
    this.menuItems.push(item);

    item = {
      name: 'Espresso Martini',
      glass: 'Cocktail',
      served: 'Caffinated, goodness',
      garnish: 'Chocolate shavings',
      description: 'Martini with espresso, gets you up and down.',
      type: 'The Sex and the City of cocktails',
      similarTastes: 'Chocolate, espresso, vermouth',
      image: 'espresso-martini.jpg'
    };
    this.menuItems.push(item);

    item = {
      name: 'Margarita',
      glass: 'Margarita',
      served: 'Blended or on ice',
      garnish: 'Salt or sugar rim',
      description: 'Waste away again, and enjoy the beach right here.',
      type: 'Party Drink.',
      similarTastes: 'Daquiri, Lime, Tequila',
      image: 'margarita.jpg'
    };
    this.menuItems.push(item);

    item = {
      name: 'Elf Piss',
      glass: 'Shot',
      served: 'Warm and foamy',
      garnish: 'None',
      description: 'An unhealthy dose of medicine. This is one to tell your friends about, if you hate your friends.',
      type: 'Regretful party fun.',
      similarTastes: 'Warm Urine',
      image: 'elfPiss.jpg'
    };
    this.menuItems.push(item);

  }

}
