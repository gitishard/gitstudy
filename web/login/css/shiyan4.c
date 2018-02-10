#include <stdio.h>
#include <string.h>
#include <stdlib.h>

//最大作业数量
const int MAXJOB = 50;
//数据结构
typedef struct node
{
	int number;
	int reach_time;
	int need_time;
	int privilege;
	float excellent;
	int start_time;
	int wait_time;
	int visited;
	bool isreached;

}job;

job jobs[MAXJOB];
int quantity;

//初始化作业序列
void initial_jobs()
{
	int i;
	for (int i = 0; i < MAXJOB; ++i)
	{
		jobs[i].number = 0;
		jobs[i].reach_time = 0;
		jobs[i].privilege = 0;
		jobs[i].excellent = 0;
		jobs[i].start_time = 0;
		jobs[i].wait_time = 0;
		jobs[i].visited = 0;
		jobs[i].isreached = false;
	}
	quantity = 0;
}

//充值全部作业信息
void reset_jinfo()
{
	for (int i = 0; i < MAXJOB; ++i)
	{
		jobs[i].start_time = 0;
		jobs[i].wait_time = 0;
		jobs[i].visited = 0;
	}
}

//查找当前current_time已到达未执行的最短作业
int findminjob(job jobs[],int count)
{
	int minjob = -1;	//=jobs[0].need_time;
	int minloc = -1;
	for (int i = 0; i < count; ++i)
	{
		if (minloc == -1)
		{
			if (jobs[i].isreached == true && jobs[i].visited == 0)
			{	
				minjob = jobs[i].need_time;
				minloc=1;
			}
		}
		else if (minjob>jobs[i].need_time && jobs[i].visited == 0 && jobs[i].isreached == true)
		{
			minjob=jobs[i].need_time;
			minloc = i;
		}

	}
	return minloc;
}

//查找最早到达作业,若牵不到达返回-1
int findrearlyjob(job jobs[],int count)
{
	int rearlyloc = -1;
	int rearlyjob = -1;
	for (int i = 0; i < count; ++i)
	{
		if (rearlyloc == -1)
		{
			rearlyloc = i;
			rearlyjob = jobs[i].reach_time;
		}
		else if (rearlyjob>jobs[i].reach_time)
		{
			minjob = jobs[i].need_time;
			rearlyloc = i;
		}
	}
	return rearlyloc;
}

//读取作业数据
void readJobdata()
{
	FILE *fp;
	char fname[20];
	int i;
	//输入测试文件文件名
	printf("please input job data file name\n");		
	scanf("%s",fname);
	if ((fp = fopen(fname,"r")) == NULL)
	{
		printf("error,open file failed,please check file name\n");
	}
	else{
		//依次读取作业信息
		while(!feof(fp))
		{
			if(fscanf(fp,"%d %d %d %d",&jobs[quantity].number,&jobs[quantity].reach_time,&jobs[quantity].need_time,&jobs[quantity].privilege)==4)
			quantity++;
		}
		//打印作业信息
		printf("output the origin job data\n");
		printf("-------------------------------------------------\n");
		printf("\tjobId\treachtime\tneedtime\tprivilege\n");
		for (int i = 0; i < quantity; ++i)
		{
			printf("\t%-8d\t%-8d\t%-8d\t%-8d\n",jobs[i].number,jobs[i].reach_time,jobs[i].need_time,jobs[i].privilege);
		}
	}
}

//FCFS
void FCFS()
{
	int i ;
	int current_time = 0;
	int loc;
	int total_waittime = 0;
	int total_roundtime = 0;

	//获取最近到达作业
	loc = findrearlyjob(jobs,quantity);

	//输出作业
	printf("\n\nFCFS算法作业流\n");
	printf("-----------------------------------------------\n");
	printf("\tjobID\treachtime\tstarttime\twaittime\troundtimt\n");
	current_time = jobs[loc].reach_time;
	//每次循环找出最先到达的作业并打印相关信息
	for (int i = 0; i < quantity; ++i)
	{
		if (jobs[loc].reach_time>current_time)
		{
			jobs[loc].start_time = jobs[loc].reach_time;
			current_time_time = jobs[loc].reach_time;
		}
		else{
			jobs[loc].start_time=current_time;
		}
		jobs[loc].wait_time = current_time-jobs[loc].reach_time;
		printf("\t%-8d\t%-8d\t%-8d\t%-8d\t%-8d\n",loc+1,jobs[loc].reach_time,jobs[loc].start_time,jobs[loc].wait_time,jobs[loc].wait_time+jobs[loc].need_time);
		
		jobs[loc].visited = 1;
		current_time+=jobs[loc].need_time;
		total_waittime+=jobs[loc].wait_time;
		total_roundtime=total_roundtime+jobs[loc].wait_time+jobs[loc].need_time;
		//获取生于作业中最近到达作业
		loc=findrearlyjob(jobs,quantity);

	}
	printf("总等待时间:\t%-8d总周转时间:\t%-8d\n",total_waittime,total_roundtime);
	printf("平均等待时间:%4.2f 平均周转时间:%4.2f\n",(float)total_waittime/(quantity),(float)total_roundtime/(quantity));
}
//短作业优先调度
void SFJschdulejob(job jobs[],int count)
{

}

int main()
{
	initial_jobs();
	readJobdata();
	FCFS();
	reset_jinfo();
	SFJschdulejob(jobs,quantity);
	system("pause");
	return 0;
}



















