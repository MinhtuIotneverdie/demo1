from django import forms

class ButtonForm(forms.Form):
    pass

class sliderForm(forms.Form):
    slider= forms.IntegerField()