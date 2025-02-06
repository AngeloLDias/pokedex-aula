import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokedex';
  pokemons: any = [];
  constructor(private http: HttpClient) {
    this.obterPokemons();
  }

  obterPokemons() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon')
      .subscribe((response: any) => {
        response.results.map((pokemon: any) => {
          this.http.get(pokemon.url).subscribe((pokemonData: any) => {
            this.pokemons.push(pokemonData);
            console.log(this.pokemons);
          })
          ;
        });
      });
      // this.pokemons = response.results;
  }
}
