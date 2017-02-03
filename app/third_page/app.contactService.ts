export class ContactService{
	public glocalvariable:string;
	public donoName:string;
	public konoName:string;
	public UserData:Array<string>;
	public countList:Array<number>;
	public userAryName:Array<string>;
	public userIniName:Array<string>;
	public dateList:Array<string>;
	constructor(){
		this.glocalvariable="";
		this.donoName="";
		this.konoName="";
		this.UserData=[];
		this.countList=[];
		this.userAryName=[];
		this.userIniName=[];
		this.dateList=[];

	}


	setUserName(passUsername){
			this.glocalvariable=passUsername;
		
	}

	getUserName(){
		
		return this.glocalvariable;
	}

	setPostDate(postDat){
			this.dateList=postDat;
		
	}

	getPostDate(){
		
		return this.dateList;
	}

	setUserAryName(passName){
			this.userAryName=passName;
		
	}

	getUserAryName(){
		
		return this.userAryName;
	}

	setUserIniName(iniName){
			this.userIniName=iniName;
		
	}

	getUserIniName(){
		
		return this.userIniName;
	}

	setDonoName(pass){
			this.donoName=pass;
		
	}

	getDonoName(){
		
		return this.donoName;
	}


	setKonoName(passed){
			this.konoName=passed;
		
	}

	getKonoName(){
		
		return this.konoName;
	}

	setUserData(passer){
			this.UserData=passer;
		
	}

	getUserData(){
		console.log(this.UserData)
		return this.UserData;
	}

	setCount(reciver){
			this.countList=reciver;
		
	}

	getCount(){
		
		return this.countList;
	}
}