from django.db import models

class Worker(models.Model):
    PLATFORM_CHOICES = [
        ('zomato', 'Zomato'),
        ('swiggy', 'Swiggy'),
        ('blinkit', 'Blinkit'),
        ('zepto', 'Zepto'),
    ]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=10, unique=True)
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    upi_id = models.CharField(max_length=100)
    avg_weekly_income = models.DecimalField(max_digits=8, decimal_places=2)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.platform}"
