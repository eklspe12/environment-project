class Air:
    def __init__(self, number, quality, city):
        self.number = number
        self.quality = quality
        self.city = city

    def __str__(self):
        output = ''
        output += f'City:{self.city}\n Number: {self.number}\n Quality: {self.quality}\n'
        output += '-------------'
        return output