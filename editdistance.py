def minDistance(word1, word2, insert, delete, replace):
    leni, lenj = len(word1), len(word2)
    D = [[0 for j in range(lenj + 1)] for i in range(leni + 1)]
    P = [[0 for j in range(lenj + 1)] for i in range(leni + 1)]
    for i in range(1, leni+1):
        D[i][0] = D[i-1][0] + delete
    for j in range(1, lenj+1):
        D[0][j] = D[0][j-1] + insert
    for i in range(1, leni+1):
        for j in range(1, lenj+1):
            if word1[i-1] == word2[j-1]:
                D[i][j] = D[i-1][j-1]
                P[i][j] = "upperleft"
            else:
                D[i][j] = min(D[i-1][j]+delete, D[i][j-1]+insert, D[i-1][j-1]+replace)
                if D[i][j] == D[i-1][j-1]+replace:
                    P[i][j] = "upperleft"
                elif D[i][j] == D[i-1][j]+delete:
                    P[i][j] = "upper"
                elif D[i][j] == D[i][j-1]+insert:
                    P[i][j] = "left"

    return D,P

f1 = open('EditDistanceData/input3.txt', 'r')   #读取文件
str = f1.readlines()
f1.close()

res, res1 = minDistance(str[2], str[6], 3, 2, 4)
print(res[len(str[2])][len(str[6])])    #输出最小权重

# for i in range(len(res1)):               #输出操作过程路径
#     for j in range(len(res1[i])):
#         print(res1[i][j], end=' ')
#     print("\n")
