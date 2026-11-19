from django.db import migrations


def seed_categories(apps, schema_editor):
    category_model = apps.get_model("project_gallery", "ProjectCategory")
    categories = (
        (
            'apartment-property-maintenance',
            'Residential & Apartments',
            'Apartment Property Maintenance',
            'Technical maintenance and repair support for residential apartment properties.',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
        ),
        (
            'electrical-systems-backup-power',
            'Electrical & Power',
            'Electrical Systems & Backup Power',
            'Electrical maintenance, lighting upgrades and power backup solutions for managed properties.',
            'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85',
        ),
        (
            'hvac-building-systems',
            'HVAC & Mechanical',
            'HVAC & Building Systems',
            'Installation, servicing and maintenance of essential mechanical and cooling systems.',
            'https://images.unsplash.com/photo-1631545806609-5c4d6d5a3e2f?auto=format&fit=crop&w=1200&q=85',
        ),
        (
            'property-security-connectivity',
            'Security & ICT',
            'Property Security & Connectivity',
            'CCTV, access control, networking and technical infrastructure for secure properties.',
            'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85',
        ),
        (
            'plumbing-water-infrastructure',
            'Plumbing & Water Systems',
            'Plumbing & Water Infrastructure',
            'Plumbing repairs, water systems, pumps and drainage maintenance.',
            'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85',
        ),
        (
            'property-repair-finishing',
            'General Maintenance',
            'Property Repair & Finishing',
            'General building repairs, finishing works and ongoing property maintenance.',
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
        ),
    )
    for position, (slug, name, title, description, cover_url) in enumerate(categories, start=1):
        category_model.objects.using(schema_editor.connection.alias).get_or_create(
            slug=slug,
            defaults={
                "name": name,
                "title": title,
                "description": description,
                "default_cover_url": cover_url,
                "position": position,
            },
        )


class Migration(migrations.Migration):
    dependencies = [("project_gallery", "0001_initial")]

    operations = [migrations.RunPython(seed_categories, migrations.RunPython.noop)]
