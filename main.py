def on_received_number(receivedNumber):
    music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    if receivedNumber == 1:
        basic.show_string("A")
    elif receivedNumber == 2:
        basic.show_string("B")
    elif receivedNumber == 3:
        basic.show_string("C")
    elif receivedNumber == 4:
        basic.show_string("D")
    elif receivedNumber == 5:
        basic.show_string("E")
    elif receivedNumber == 6:
        basic.show_string("F")
    elif receivedNumber == 7:
        basic.show_string("G")
    elif receivedNumber == 8:
        basic.show_string("H")
    elif receivedNumber == 9:
        basic.show_string("I")
    elif receivedNumber == 10:
        basic.show_string("J")
    elif receivedNumber == 11:
        basic.show_string("K")
    elif receivedNumber == 12:
        basic.show_string("L")
    elif receivedNumber == 13:
        basic.show_string("M")
    elif receivedNumber == 14:
        basic.show_string("N")
    elif receivedNumber == 15:
        basic.show_string("O")
    elif receivedNumber == 16:
        basic.show_string("P")
    elif receivedNumber == 17:
        basic.show_string("Q")
    elif receivedNumber == 18:
        basic.show_string("R")
    elif receivedNumber == 19:
        basic.show_string("S")
    elif receivedNumber == 20:
        basic.show_string("T")
    elif receivedNumber == 21:
        basic.show_string("U")
    elif receivedNumber == 22:
        basic.show_string("V")
    elif receivedNumber == 23:
        basic.show_string("W")
    elif receivedNumber == 24:
        basic.show_string("X")
    elif receivedNumber == 25:
        basic.show_string("Y")
    elif receivedNumber == 26:
        basic.show_string("Z")
    else:
        pass
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global _1, Turn, _2, _3, _4
    if Turn == 0:
        _1 = 1
        Turn += 1
    elif Turn == 1:
        _2 = 1
        Turn += 1
    elif Turn == 2:
        _3 = 1
        Turn += 1
    elif Turn == 3:
        _4 = 1
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Finish
    Finish = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global _1, Turn, _2, _3, _4
    if Turn == 0:
        _1 = 2
        Turn += 1
    elif Turn == 1:
        _2 = 2
        Turn += 1
    elif Turn == 2:
        _3 = 2
        Turn += 1
    elif Turn == 3:
        _4 = 2
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

Finish = 0
Turn = 0
_4 = 0
_3 = 0
_2 = 0
_1 = 0
radio.set_group(82493)

def on_forever():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 1:
            if _2 == 0:
                if _3 == 0:
                    if _4 == 0:
                        radio.send_number(5)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 0:
                if _3 == 0:
                    if _4 == 0:
                        radio.send_number(20)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever)

def on_forever2():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 1:
            if _2 == 2:
                if _3 == 0:
                    if _4 == 0:
                        radio.send_number(1)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 1:
                if _3 == 1:
                    if _4 == 1:
                        radio.send_number(2)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 1:
                if _3 == 2:
                    if _4 == 1:
                        radio.send_number(3)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 1:
                if _3 == 1:
                    if _4 == 0:
                        radio.send_number(4)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever2)

def on_forever3():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 1:
            if _2 == 2:
                if _3 == 2:
                    if _4 == 2:
                        radio.send_number(10)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 1:
                if _3 == 2:
                    if _4 == 0:
                        radio.send_number(11)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 2:
                if _3 == 1:
                    if _4 == 1:
                        radio.send_number(12)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 2:
                if _3 == 0:
                    if _4 == 0:
                        radio.send_number(13)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever3)

def on_forever4():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 1:
            if _2 == 2:
                if _3 == 2:
                    if _4 == 0:
                        radio.send_number(23)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            pass
        if _1 == 2:
            if _2 == 1:
                if _3 == 2:
                    if _4 == 2:
                        radio.send_number(25)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 2:
                if _3 == 1:
                    if _4 == 1:
                        radio.send_number(26)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever4)

def on_forever5():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 2:
            if _2 == 1:
                if _3 == 0:
                    if _4 == 0:
                        radio.send_number(14)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 2:
                if _3 == 2:
                    if _4 == 0:
                        radio.send_number(15)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 2:
                if _3 == 2:
                    if _4 == 1:
                        radio.send_number(16)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 2:
                if _3 == 1:
                    if _4 == 2:
                        radio.send_number(17)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever5)

def on_forever6():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 1:
            if _2 == 1:
                if _3 == 2:
                    if _4 == 1:
                        radio.send_number(6)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 2:
            if _2 == 2:
                if _3 == 1:
                    if _4 == 0:
                        radio.send_number(7)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 1:
                if _3 == 1:
                    if _4 == 1:
                        radio.send_number(8)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 1:
                if _3 == 0:
                    if _4 == 0:
                        radio.send_number(9)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever6)

def on_forever7():
    global _1, _2, _3, _4, Finish, Turn
    if Finish == 1:
        if _1 == 1:
            if _2 == 2:
                if _3 == 1:
                    if _4 == 0:
                        radio.send_number(18)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 1:
                if _3 == 1:
                    if _4 == 0:
                        radio.send_number(19)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 1:
                if _3 == 2:
                    if _4 == 0:
                        radio.send_number(21)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
        if _1 == 1:
            if _2 == 1:
                if _3 == 1:
                    if _4 == 2:
                        radio.send_number(22)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
basic.forever(on_forever7)
