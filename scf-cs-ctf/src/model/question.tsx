/**
 * Digital CTF Activity - Models the elements common to all Questions
 * @version 01.17.23
 * @author MrH-rezroll
 */

export default abstract class Question{
    public theQuestion:string;
    public timeLimit:number;
    public pointsScored:number;
    public responseGiven:string;

    constructor(question:string, timeLimit: number){
        this.theQuestion = question;
        this.timeLimit = timeLimit;
        this.pointsScored = 0;
        this.responseGiven = "";
    }

    protected setPointsScored(pointsScored:number):void {
        this.pointsScored = pointsScored;
    }

    public scoreAnswer(answerNumber: number = 0):void {}
}