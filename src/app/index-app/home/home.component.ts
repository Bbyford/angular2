import  { Component,OnInit} from '@angular/core';
import { Form }    from './form';
@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    model = new Form(11,'nike',this.powers[2],'Chunk overstreet');
    submitted = false;
    setclass = 'active';
    onSubmit(){
        this.submitted = true;
        console.log(this.active);
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
