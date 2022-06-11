radio.onReceivedNumber(function (receivedNumber) {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    if (receivedNumber == ArrowNames.North) {
        wuKong.mecanumRun(wuKong.RunList.Front, 100)
    } else {
        if (receivedNumber == ArrowNames.NorthEast) {
            wuKong.mecanumRun(wuKong.RunList.RightFront, 100)
        } else {
            if (receivedNumber == ArrowNames.East) {
                wuKong.mecanumRun(wuKong.RunList.right, 100)
            } else {
                if (receivedNumber == ArrowNames.SouthEast) {
                    wuKong.mecanumRun(wuKong.RunList.RightRear, 100)
                } else {
                    if (receivedNumber == ArrowNames.South) {
                        wuKong.mecanumRun(wuKong.RunList.rear, 100)
                    } else {
                        if (receivedNumber == ArrowNames.SouthWest) {
                            wuKong.mecanumRun(wuKong.RunList.LeftRear, 100)
                        } else {
                            if (receivedNumber == ArrowNames.West) {
                                wuKong.mecanumRun(wuKong.RunList.left, 100)
                            } else {
                                if (receivedNumber == ArrowNames.NorthWest) {
                                    wuKong.mecanumRun(wuKong.RunList.left, 100)
                                } else {
                                    if (receivedNumber == 11) {
                                        wuKong.mecanumDrift(wuKong.TurnList.Right)
                                    } else {
                                        if (receivedNumber == 12) {
                                            wuKong.mecanumSpin(wuKong.TurnList.Right, 50)
                                        } else {
                                            if (receivedNumber == 13) {
                                                wuKong.mecanumDrift(wuKong.TurnList.Left)
                                            } else {
                                                if (receivedNumber == 14) {
                                                    wuKong.mecanumSpin(wuKong.TurnList.Left, 50)
                                                } else {
                                                    if (receivedNumber == 15) {
                                                        wuKong.mecanumSpin(wuKong.TurnList.Left, 100)
                                                    } else {
                                                        if (receivedNumber == 16) {
                                                            wuKong.mecanumSpin(wuKong.TurnList.Right, 100)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        wuKong.mecanumStop()
        wuKong.setLightMode(wuKong.LightMode.OFF)
        basic.showIcon(IconNames.Butterfly)
    }
})
basic.showIcon(IconNames.Chessboard)
radio.setGroup(1)
wuKong.mecanumWheel(
wuKong.ServoList.S0,
wuKong.ServoList.S2,
wuKong.ServoList.S1,
wuKong.ServoList.S3
)
basic.showIcon(IconNames.Butterfly)
