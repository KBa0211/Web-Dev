def close_far(a, b, c):
    close = abs(a - b) <= 1
    far_b = abs(a - c) >= 2 and abs(b - c) >= 2
    close_c = abs(a - c) <= 1
    far_c = abs(a - b) >= 2 and abs(b - c) >= 2

    return (close and far_b) or (close_c and far_c)