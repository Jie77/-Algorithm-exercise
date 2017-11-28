def find(arr,tar):
    i=0
    j=len(arr)-1
    list = []
    flag = False
    while (i!=j and i<j):
        if tar == arr[i]+arr[j]:
            list.append(arr[i])
            list.append(arr[j])
            flag = True
            i += 1
            j -=1
        elif tar < arr[i]+arr[j]:
            j -= 1
        else:
            i += 1
    if flag:
        for k in range(0,(len(list)),2):
            print("两个数为:"+str(list[k])+"---"+str(list[k+1])+"\n")
    else:
        print("不存在")

narr = [10, 10, 49, 50, 56, 64, 86, 88, 93, 96]
tar = 106
find(narr,tar)
