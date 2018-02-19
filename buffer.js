
var buf=new Buffer(256);
len=buf.write('simply easy learning');
console.log(len);
buf1=new Buffer(26);
for(i=0;i<26;i++)
{

	buf1[i]=i+97;
}
console.log(buf1.toString('ascii'));
console.log(buf1.toString('ascii',0,5));
console.log(buf1.toString('utf8',0,5));
console.log(buf1.toString('',undefined,0,5));

buf=new Buffer('bainapalli krishna ');
var json=buf.toJSON(buf);
console.log(json);

var buffer1= new Buffer('bainapalli');
var buffer2= new Buffer('krishna');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log('buffer concat'+buffer3.toString());

var buffer1=new Buffer('ABC');
var buffer2= new Buffer('ABCD');
var result=buffer1.compare(buffer2);
if(result<0)
{
console.log(buffer1 +"comes before"+buffer2);

}else if (result==1) {
	console.log(buffer1 +"is a same"+buffer2);
}
else
{
console.log(buffer1 +"comes after"+buffer2);

}

var buffer1=new Buffer('ABC');
var buffer2=new Buffer(3);
buffer1.copy(buffer2);
console.log(buffer2.toString());


var buffer1=new Buffer('bainapalli krishna');
var buffer2=buffer1.slice(0,5);
console.log(buffer2.toString());


















