#include<stdio.h>
struct node{
int a;
int b;
}s={1,2},s2;
main()
{
FILE *fp;

fp=fopen("binary.bin","w");

if(fp==NULL)
	puts("null");
else
	{
	
	fwrite(&s,sizeof(s),1,fp);
	}
fclose(fp);

fp=fopen("test.txt","r");
fread(&s2,sizeof(s),1,fp);
printf("\n%d\n%d",s2.a,s2.b);
fclose(fp);




}
