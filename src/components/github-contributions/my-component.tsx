import { Component, Prop, h } from '@stencil/core';
import  GitHubCalendar from 'github-calendar';

@Component({
  tag: 'github-contributions',
  styleUrl: 'github-contributions.css',
  shadow: false
})
export class MyComponent {

  @Prop() username: string;

  componentDidLoad(){
    GitHubCalendar(".calendar", this.username, {
      responsive: true,
      summary_text: "",
      global_stats: ""
    });
  }


  render() {
    return <div class="calendar"></div>;
  }
}
