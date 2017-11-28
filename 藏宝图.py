str = input()
arr = list(str)
nstr = input()
narr = list(nstr)
final = 1
pos = 0
for i in range(len(narr)):
    key = narr[i]
    flag = 0
    for j in range(pos,len(arr)):
        if key == arr[j]:
            pos = j+1
            flag = 1
            break
    if flag == 0:
        print("No")
        final = 0
        break
if final:
    print("Yes")
