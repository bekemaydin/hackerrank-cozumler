from decimal import Decimal

if __name__ == '__main__':
    n = int(raw_input())
    student_marks = {}
    for _ in range(n):
        line = raw_input().split()
        name, scores = line[0], line[1:]
        scores = map(float, scores)
        student_marks[name] = scores
    query_name = raw_input()
    
    print( format(sum(student_marks[query_name])/len(student_marks[query_name]), ".2f") )
    
    """ student_scores = student_marks[query_name]
        total_scores = sum(student_scores)
        average_score = Decimal(total_scores/3)
        print('%.2f'%(average_score,2)) """

    """ benim yazdigim kodlar comment satirlarinda"""