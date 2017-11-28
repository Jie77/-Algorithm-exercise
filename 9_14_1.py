import random

def ran(num):
    arr=[]
    i=0
    while i<num:
        arr.append(random.randint(0,100))
        i += 1
    return arr

def merge(left, right):
    i = 0
    j = 0
    result = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result += left[i:]
    result += right[j:]
    return result

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    num = len(arr) // 2
    left = merge_sort(arr[:num])
    right = merge_sort(arr[num:])
    return merge(left, right)

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

arr = ran(10)
print(arr)
narr = merge_sort(arr)
print(narr)
print("输入目标数字：")
tar = int(input())
find(narr,tar)

