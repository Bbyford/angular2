import  { Component,OnInit} from '@angular/core';
import { Form }    from './form';
@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {
    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    model = new Form(11,'nike',this.powers[2],'Chunk overstreet');
    submitted = false;
    setclass = 'active';
    onSubmit(){
        this.submitted = true;
    }
    get diagnostic(){
        return JSON.stringify(this.model);
    }
    active = true;
    newHero(){
        this.model = new Form(22,'','');
        this.active = false;
        this.setclass = 'new';
        setTimeout(()=>this.active=true,0)
    }
    ngOnInit(){

    }
}
