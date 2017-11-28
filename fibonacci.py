fib = [0, 1]
i = 2
num = int(input())
while True:
    if num == 0 or num ==1:
        i = 1
        break
    if num > fib[i-1] + fib[i-2]:
        fib.append(fib[i-1] + fib[i-2])
        i += 1
    else:
        break
fib.append(fib[i-1] + fib[i-2])
print((fib[i]-num) if ((num-fib[i-1])>(fib[i]-num)) else (num-fib[i-1]))
