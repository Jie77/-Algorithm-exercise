import random

def ran(num):
    arr=[]
    i=0
    while i<num:
        arr.append(random.randint(0,100))
        i += 1
    return arr
counter = 0
def merge(left, right):
    global counter
    i, j = 0, 0
    result = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            counter += len(left[i:])
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

arr = ran(6)
print(arr)
merge_sort(arr)
print(counter)


