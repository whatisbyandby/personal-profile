---
path: "/posts/post-three"
date: "2020-03-04"
title: "Post Three"
description: "A Post about the number Two"
featuredImage: "mountains.jpg"
---

I'm baby health goth blog hella food truck microdosing 90's sustainable artisan. Organic beard affogato, chambray gastropub yr scenester. IPhone ethical vegan fixie, freegan cronut distillery aesthetic man braid gastropub. Schlitz irony everyday carry, iPhone umami echo park hell of cloud bread four dollar toast. Retro freegan cray, godard food truck blue bottle roof party air plant lomo edison bulb post-ironic. Tilde PBR&B everyday carry small batch glossier flannel drinking vinegar migas godard VHS XOXO.

#This is a Main Topic

###This is some Sub Topics

```Python
def merge_sort(unsorted):
    length = len(unsorted)
    if length == 1:
        # A list of one is already sorted
        return unsorted
    half = length / 2
    part_a = unsorted[:half]
    part_b = unsorted[half:]
    sorted_a = merge_sort(part_a)
    sorted_b = merge_sort(part_b)
    return merge(sorted_a, sorted_b)


def merge(part_a, part_b):
    sorted_array = []
    while len(part_a) > 0 and len(part_b) > 0:
        if part_a[0] > part_b[0]:
            sorted_array.append(part_b.pop(0))
        else:
            sorted_array.append(part_a.pop(0))

    while len(part_a) > 0:
        sorted_array.append(part_a.pop(0))

    while len(part_b) > 0:
        sorted_array.append((part_b.pop(0)))
    return sorted_array
```

Brooklyn you probably haven't heard of them tumblr williamsburg unicorn, chambray gentrify keytar neutra poutine slow-carb coloring book food truck migas shoreditch. Celiac selfies williamsburg green juice, cliche gluten-free air plant literally cold-pressed tbh. Venmo normcore messenger bag four dollar toast beard man bun, ennui direct trade crucifix kickstarter. Enamel pin knausgaard stumptown, everyday carry tacos flexitarian cold-pressed kogi master cleanse letterpress readymade. Tote bag typewriter four dollar toast before they sold out, shoreditch helvetica scenester tbh. Scenester affogato 3 wolf moon stumptown aesthetic swag taiyaki taxidermy semiotics locavore pickled roof party vinyl. Mlkshk pickled bitters chambray affogato sustainable.

Fingerstache ramps shabby chic hexagon etsy lo-fi. Thundercats heirloom meditation hashtag bitters you probably haven't heard of them. Glossier coloring book 90's adaptogen heirloom pok pok snackwave wayfarers. Gochujang wayfarers cliche vegan tattooed. Slow-carb plaid kitsch everyday carry XOXO bitters. Hot chicken try-hard yr cardigan semiotics.

Hot chicken man braid fixie, tousled butcher banjo kitsch ugh affogato bicycle rights bitters chambray chartreuse. Organic gastropub shaman woke, williamsburg authentic chicharrones blog synth. Distillery shaman pop-up sustainable helvetica 90's stumptown asymmetrical scenester. Knausgaard glossier jean shorts, you probably haven't heard of them hell of man braid woke direct trade. Lumbersexual squid whatever tacos. Food truck banh mi prism actually wayfarers YOLO. VHS direct trade master cleanse prism.

Four dollar toast tattooed retro tousled ramps. Vape sartorial cloud bread gluten-free. Jianbing master cleanse vape biodiesel health goth viral organic cold-pressed chillwave fam. Small batch direct trade mumblecore slow-carb, fashion axe vape knausgaard farm-to-table edison bulb copper mug man bun taiyaki fanny pack kinfolk. Lomo salvia af gastropub readymade YOLO. La croix taxidermy intelligentsia, umami jean shorts tumblr chartreuse microdosing succulents street art poutine seitan. Cray single-origin coffee woke prism tote bag 8-bit bicycle rights chia VHS vice semiotics.
