import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	data = [
		{ text: 'Days', value: 0 },
		{ text: 'Hours', value: 0 },
		{ text: 'Minutes', value: 0 },
		{ text: 'Seconds', value: 0 },
	];

	constructor() {
		const eventTime = moment('01-01-2019 00:00:00', 'DD-MM-YYYY HH:mm:ss').unix();
		const currentTime = moment().unix();
		const diffTime = eventTime - currentTime;
		const interval = 1000;
		let duration = moment.duration(diffTime * 1000, 'milliseconds');


		setInterval(() => {
			duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');

			this.days = moment.duration(duration).asDays();
			this.hours = moment.duration(duration).hours();
			this.minutes = moment.duration(duration).minutes();
			this.seconds = moment.duration(duration).seconds();
		}, interval);
	}

	set days(v: number) {
		const i = this.data.findIndex(e => e.text === 'Days');

		this.data[i].value = Math.floor(v);
	}

	set hours(v: number) {
		const i = this.data.findIndex(e => e.text === 'Hours');

		this.data[i].value = v;
	}

	set minutes(v: number) {
		const i = this.data.findIndex(e => e.text === 'Minutes');

		this.data[i].value = v;
	}

	set seconds(v: number) {
		const i = this.data.findIndex(e => e.text === 'Seconds');

		this.data[i].value = v;
	}
}
