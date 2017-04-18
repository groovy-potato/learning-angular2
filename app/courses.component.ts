import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                        <vote [totalVotes]="this.totalVotes" (vote)="checkVote($event)" [myVote]="this.myVote"></vote>
                    </li>
                    
                </ul>`
})
export class CoursesComponent{
    title = "Course Title Page";
    courses;
    isFavorite = true;
    isLiked = true;
    totalVotes = 11;
    myVote= 1;
    

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

    onLike($event){
        console.log($event);
    }
    onFavorite($event){
        console.log($event.newValue);
    }
    checkVote($event){
        console.log($event.myVote)
    }
}