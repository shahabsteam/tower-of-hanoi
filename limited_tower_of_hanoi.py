step=1
def hanoi(n,src,help,dst):
    global step
    #Base condition !!there is only one ring!!
    #because we are forbidden to move from A->c we move disk from A->B then B->c
    if n==1:
        print(step,src,help)
        step+=1
        print(step,help,dst)
        step+=1
    else:
        #Move n-1 rings from  a to b
        #hanoi(n-1,src,dst,help)
        #hanoi(n-1,help,source,dst)
        hanoi(n-1,src,help,dst)
        print(step,src,help)
        step+=1
        
        hanoi(n-1,dst,help,src)
        print(step,help,src)
        step+=1
        hanoi(n-1,src,help,dst)

n=int(input())
hanoi(n,'A','B','C')
