import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-time-square',
	templateUrl: './time-square.component.html',
	styleUrls: ['./time-square.component.css']
})
export class TimeSquareComponent implements OnInit {

	data = {
		number: null,
		text: null,
	};

	constructor() { }


	ngOnInit() {
	}

	@Input()
	set number(v: number) {
		this.data.number = (v) ? v : null;
	}
	get number(): number | null {
		return this.data.number;
	}
	@Input()
	set text(v: string) {
		this.data.text = (v) ? v : null;
	}
	get text(): string | null {
		return this.data.text;
	}
}
