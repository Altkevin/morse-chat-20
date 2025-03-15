radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    if (receivedNumber == 1) {
        basic.showString("A")
    } else if (receivedNumber == 2) {
        basic.showString("B")
    } else if (receivedNumber == 3) {
        basic.showString("C")
    } else if (receivedNumber == 4) {
        basic.showString("D")
    } else if (receivedNumber == 5) {
        basic.showString("E")
    } else if (receivedNumber == 6) {
        basic.showString("F")
    } else if (receivedNumber == 7) {
        basic.showString("G")
    } else if (receivedNumber == 8) {
        basic.showString("H")
    } else if (receivedNumber == 9) {
        basic.showString("I")
    } else if (receivedNumber == 10) {
        basic.showString("J")
    } else if (receivedNumber == 11) {
        basic.showString("K")
    } else if (receivedNumber == 12) {
        basic.showString("L")
    } else if (receivedNumber == 13) {
        basic.showString("M")
    } else if (receivedNumber == 14) {
        basic.showString("N")
    } else if (receivedNumber == 15) {
        basic.showString("O")
    } else if (receivedNumber == 16) {
        basic.showString("P")
    } else if (receivedNumber == 17) {
        basic.showString("Q")
    } else if (receivedNumber == 18) {
        basic.showString("R")
    } else if (receivedNumber == 19) {
        basic.showString("S")
    } else if (receivedNumber == 20) {
        basic.showString("T")
    } else if (receivedNumber == 21) {
        basic.showString("U")
    } else if (receivedNumber == 22) {
        basic.showString("V")
    } else if (receivedNumber == 23) {
        basic.showString("W")
    } else if (receivedNumber == 24) {
        basic.showString("X")
    } else if (receivedNumber == 25) {
        basic.showString("Y")
    } else if (receivedNumber == 26) {
        basic.showString("Z")
    } else {
        
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Turn == 0) {
        _1 = 1
        Turn += 1
    } else if (Turn == 1) {
        _2 = 1
        Turn += 1
    } else if (Turn == 2) {
        _3 = 1
        Turn += 1
    } else if (Turn == 3) {
        _4 = 1
    } else {
        
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    Finish = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Turn == 0) {
        _1 = 2
        Turn += 1
    } else if (Turn == 1) {
        _2 = 2
        Turn += 1
    } else if (Turn == 2) {
        _3 = 2
        Turn += 1
    } else if (Turn == 3) {
        _4 = 2
    } else {
        
    }
    
})
let Finish = 0
let Turn = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
radio.setGroup(82493)
basic.forever(function on_forever() {
    
    if (Finish == 1) {
        if (_1 == 1) {
            if (_2 == 0) {
                if (_3 == 0) {
                    if (_4 == 0) {
                        radio.sendNumber(5)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 0) {
                if (_3 == 0) {
                    if (_4 == 0) {
                        radio.sendNumber(20)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
basic.forever(function on_forever2() {
    
    if (Finish == 1) {
        if (_1 == 1) {
            if (_2 == 2) {
                if (_3 == 0) {
                    if (_4 == 0) {
                        radio.sendNumber(1)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 1) {
                if (_3 == 1) {
                    if (_4 == 1) {
                        radio.sendNumber(2)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 1) {
                if (_3 == 2) {
                    if (_4 == 1) {
                        radio.sendNumber(3)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 1) {
                if (_3 == 1) {
                    if (_4 == 0) {
                        radio.sendNumber(4)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
basic.forever(function on_forever3() {
    
    if (Finish == 1) {
        if (_1 == 1) {
            if (_2 == 2) {
                if (_3 == 2) {
                    if (_4 == 2) {
                        radio.sendNumber(10)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 1) {
                if (_3 == 2) {
                    if (_4 == 0) {
                        radio.sendNumber(11)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 2) {
                if (_3 == 1) {
                    if (_4 == 1) {
                        radio.sendNumber(12)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 2) {
                if (_3 == 0) {
                    if (_4 == 0) {
                        radio.sendNumber(13)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
basic.forever(function on_forever4() {
    
    if (Finish == 1) {
        if (_1 == 1) {
            if (_2 == 2) {
                if (_3 == 2) {
                    if (_4 == 0) {
                        radio.sendNumber(23)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            
        }
        
        if (_1 == 2) {
            if (_2 == 1) {
                if (_3 == 2) {
                    if (_4 == 2) {
                        radio.sendNumber(25)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 2) {
                if (_3 == 1) {
                    if (_4 == 1) {
                        radio.sendNumber(26)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
basic.forever(function on_forever5() {
    
    if (Finish == 1) {
        if (_1 == 2) {
            if (_2 == 1) {
                if (_3 == 0) {
                    if (_4 == 0) {
                        radio.sendNumber(14)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 2) {
                if (_3 == 2) {
                    if (_4 == 0) {
                        radio.sendNumber(15)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 2) {
                if (_3 == 2) {
                    if (_4 == 1) {
                        radio.sendNumber(16)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 2) {
                if (_3 == 1) {
                    if (_4 == 2) {
                        radio.sendNumber(17)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
basic.forever(function on_forever6() {
    
    if (Finish == 1) {
        if (_1 == 1) {
            if (_2 == 1) {
                if (_3 == 2) {
                    if (_4 == 1) {
                        radio.sendNumber(6)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 2) {
            if (_2 == 2) {
                if (_3 == 1) {
                    if (_4 == 0) {
                        radio.sendNumber(7)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 1) {
                if (_3 == 1) {
                    if (_4 == 1) {
                        radio.sendNumber(8)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 1) {
                if (_3 == 0) {
                    if (_4 == 0) {
                        radio.sendNumber(9)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
basic.forever(function on_forever7() {
    
    if (Finish == 1) {
        if (_1 == 1) {
            if (_2 == 2) {
                if (_3 == 1) {
                    if (_4 == 0) {
                        radio.sendNumber(18)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 1) {
                if (_3 == 1) {
                    if (_4 == 0) {
                        radio.sendNumber(19)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 1) {
                if (_3 == 2) {
                    if (_4 == 0) {
                        radio.sendNumber(21)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
        if (_1 == 1) {
            if (_2 == 1) {
                if (_3 == 1) {
                    if (_4 == 2) {
                        radio.sendNumber(22)
                        _1 = 0
                        _2 = 0
                        _3 = 0
                        _4 = 0
                        Finish = 0
                        Turn = 0
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
