def Manacher(s):
	#对字符串进行处理
	s = "#"+"#".join(s)+"#"
	#RL[i]对应s[i]的最大回文串折叠后的长度
	RL = [0]*len(s) #全部初始化为0
	#已知回文串所触及的右端的最远下标
	maxRight = 0
	#已知最长回文串的中间元素下标
	pos = 0
	#最长回文串长度
	maxLen = 0
	for i in range(len(s)):
		if i < maxRight:
			#利用已知信息获得一部分或者全部以i为中心的回文串长度
			RL[i] = min(RL[2*pos-i], maxRight-i)
		else:
			RL[i] = 1
		#开始扩展
		while i-RL[i]>=0 and i+RL[i]<len(s) and s[i-RL[i]]==s[i+RL[i]]:
			RL[i] += 1
		#尝试更新maxright和pos
		if RL[i]+i-1>maxRight:
			pos = i 
			maxRight = RL[i]+i-1
		maxLen = max(RL[i],maxLen)
	return maxLen-1


if __name__ == "__main__":
	print(Manacher("abcddcbafafr"))
