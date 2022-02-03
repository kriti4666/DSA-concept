class Triangle:
    def triangle (num):
        for i in range(num):
            for j in range(1 + i):
                print("*", end=" ")
            print()
 
right_ang_t = Triangle.triangle(5)