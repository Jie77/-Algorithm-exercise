import sys
arr = []
for line in sys.stdin:
    if line.strip() == '':
        break
    arr.extend(line.split())
print(len(set(arr)))
