import { NumberedListComponent } from './components/numbered-list/numbered-list.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BlocComponent } from "./components/bloc/bloc.component";
import { StatsPartComponent } from './components/stats-part/stats-part.component';
import { ServiceComponent } from './components/service/service.component';
import { EventCardComponent } from "./components/event-card/event-card.component";
import { TeamSliderComponent } from './components/team-slider/team-slider.component';
import { TestimonialQuoteComponent } from './components/testimonial-quote/testimonial-quote.component';
import { Bloc2Component } from './components/bloc2/bloc2.component';
import { CheckItemComponent } from './components/check-item/check-item.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { AccordionItemComponent } from "./components/accordion-item/accordion-item.component";
import { AwardListItemComponent } from "./components/award-list-item/award-list-item.component";
import { PricingCardComponent } from "./components/pricing-card/pricing-card.component";
import { ArticleCardComponent } from "./components/article-card/article-card.component";
import { MapComponent } from "./components/map/map.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BlocComponent,
    Bloc2Component,
    StatsPartComponent,
    ServiceComponent,
    EventCardComponent,
    TeamSliderComponent,
    TestimonialQuoteComponent,
    NumberedListComponent,
    CheckItemComponent,
    FeatureCardComponent,
    CategoryItemsComponent,
    ProjectCardComponent,
    TestimonialCardComponent,
    AccordionItemComponent,
    AwardListItemComponent,
    PricingCardComponent,
    ArticleCardComponent,
    MapComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agency';


}
