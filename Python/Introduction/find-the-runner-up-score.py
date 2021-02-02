if __name__ == '__main__':
    n = int(raw_input())
    arr = list(set(sorted(map(int, raw_input().split()))))
    
print(sorted(list(set(arr)))[-2])