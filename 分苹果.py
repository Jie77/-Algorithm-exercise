num = int(input())
p = input().split()
def f1(x):
    return int(x)
p = list(map(f1,p))
if sum(p)%num == 0:
    ave = sum(p)/num
    sum = 0
    flag = 1
    for i in p:
        if (i-ave)%2 == 0:
            sum += abs((i-ave))
        else:
            print("-1")
            flag = 0
            break
    if flag:
        print(int(sum/4))
else:
    print("-1")
